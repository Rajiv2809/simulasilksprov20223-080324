<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $data = [
            'username' => $request->username,
            'password' => $request->password
        ];
        if(!Auth::attempt($data)){
            return  response()->json([
                'message' => 'invalid Login'
            ], 401);
        }
        $user = Auth::user();
        $token = md5($request->username);
        $user->remember_token = $token;   
        $user-> save();

        return response()->json([
            'message' => 'login success',
            'token' => $token
        ]);
    
    }
    public function Logout() {
        $user = Auth::user() ;
        $user->remember_token = null;
        $user->save();
        
        Auth::logout();
        return response([
            'message' => 'logout success'
        ]);
        
    }
    public function me(){
        $user = Auth::user();
        return response()->json([
            'role' => $user->role,
            'token' => $user->remember_token,
            'username' => $user->username
        ]);
    }
}
