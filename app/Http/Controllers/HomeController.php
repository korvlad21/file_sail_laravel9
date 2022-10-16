<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        try {
            $database_host = Config::get('config.database_host');
            $database_name = Config::get('config.database_name');
            $database_user = Config::get('config.database_user');
            $database_password = Config::get('config.database_password');

            $connection = mysqli_connect($database_host,$database_user,$database_password,$database_name);

            if (mysqli_connect_errno()){
                    return false;
                } else {
                    return true;
                }

        } catch (Exception $e) {

            return false;
        }
        return 2;
        return view('home');
    }
}
