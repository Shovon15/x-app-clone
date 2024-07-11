<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller implements HasMiddleware
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login']]);
    // }

    /**
     * Get the middleware that should be assigned to the controller.
     */

    public static function middleware(): array
    {
        return [
            new Middleware('auth:api', except: ['login']),
        ];
    }



    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            // return $this->response(false, 'Invalid data!',  null, 400, $validator->errors());
            return response()->json([
                'success' => false,
                'message' => 'Invalid data!',
                'data' => null,
                'code' => 400,
                'errors' => $validator->errors(),
            ], 400);
        }

        $credential = $request->only('email', 'password');

        if (!$token = JWTAuth::attempt($credential)) {
            // return $this->response(false, 'Wrong email or password!!', null,  403, $validator->errors());

            return response()->json([
                'success' => false,
                'message' => 'Wrong email or password!!',
                'data' => null,
                'code' => 403,
                'errors' => $validator->errors(),
            ], 403);
        }

        $userData = auth()->user()->only(['id', 'name', 'user_name', 'email', 'email_verified_at', 'avatar']);

        $data = [
            'token' => $token,
            'user' => $userData,
            'message' => 'Login successfully',
        ];
        // return $this->response(true, 'Login successfully.', $data);

        return response()->json([
            'success' => true,
            'message' =>  'Login successfully.',
            'data' =>  $data,
            'code' => 200,
            'errors' => null,
        ], 200);
    }

    public function logout()
    {
        auth()->logout(true);
        return $this->response(true, 'Logout successfully.');
    }
}
