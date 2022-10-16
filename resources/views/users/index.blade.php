@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="card-deck mb-4">
            <div class="card">
                <div class="card-header bg-dark text-light">{{ __('Информация о пользователе') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="row">
                        <p>
                            <span class="font-weight-bold">Фамилия:</span> {{ $user->surname }}
                        </p>
                        <p>
                            <span class="font-weight-bold">Имя:</span> {{ $user->name }}
                        </p>
                        <p>
                            <span class="font-weight-bold">Отчество:</span> {{ $user->middle_name }}
                        </p>
                        <p>
                            <span class="font-weight-bold">E-mal:</span> {{ $user->email }}
                        </p>
                        <p>
                        <form action="{{ route('logout') }}" method="post">
                            @csrf
                            <button class="btn btn-dark" type="submit">Выход</button>
                        </form>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
