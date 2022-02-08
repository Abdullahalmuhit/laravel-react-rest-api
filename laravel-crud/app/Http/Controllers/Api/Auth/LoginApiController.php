<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LoginApiController extends Controller
{
    public function ApiCreateToken()
    {
        $user = User::first();
        $accessToken = $user->createToken('Laravel Personal Access Client', ['place-orders'])->accessToken;
        return $accessToken;
    }
}
