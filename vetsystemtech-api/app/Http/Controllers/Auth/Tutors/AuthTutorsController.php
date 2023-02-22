<?php

namespace App\Http\Controllers\Auth\Tutors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthTutorsController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Credenciais inválidas.'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Não foi possível criar o token.'], 500);
        }

        return response()->json(compact('token'));
    }

    public function me()
    {
        $tutor = JWTAuth::parseToken()->authenticate();

        return response()->json(compact('tutor'));
    }

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Tutor desconectado com sucesso.']);
    }
}
