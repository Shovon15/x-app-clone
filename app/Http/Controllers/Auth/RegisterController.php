<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class RegisterController extends Controller
{


    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'user_name' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            // return response()->json([
            //     'success' => false,
            //     'message' => 'Please provide valid data!',
            //     'data' => null,
            //     'code' => 400,
            //     'errors' => $validator->errors(),
            // ], 400);

            return $this->response(false, 'Please provide valid data!', null, 400, $validator->errors());
        }

        try {

            $data = $request->only(['name', 'user_name', 'email', 'password']);
            $data['email_verified_at'] =  now();
            $user = $this->createOrUpdate($data);

            if (!$token = JWTAuth::attempt([
                "email" => $data['email'],
                "password" => $data['password'],
            ])) {
                // return $this->response(false, 'Unauthorized', null,  401, $validator->errors());
                return response()->json([
                    'success' => false,
                    'message' => 'Unauthorized',
                    'data' => null,
                    'code' => 401,
                    'errors' => $validator->errors(),
                ], 401);
            }

            $userData = [
                'token' => $token,
                'user' => $user
            ];

            // return $this->response(true, 'User created successfully.', $userData);
            return response()->json([
                'success' => true,
                'message' => 'User created successfully.',
                'data' => $userData,
                'code' => 201,
            ], 201);
        } catch (\Exception $e) {
            // return $this->response(false, $e->getMessage() ?? 'Something went wrong!', null, 400);
            return response()->json([
                'success' => false,
                'message' => $e->getMessage() ?? 'Something went wrong!',
                'data' => null,
                'code' => 400,
            ], 400);
        }
    }

    public function createOrUpdate($data = [], $user = null)
    {
        if (blank($user)) {
            $user = new User();
        }

        $user->fill($data);
        $user->save();
        return $user;
    }
}
