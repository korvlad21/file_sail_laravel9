@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-dark text-light">{{ __('Облачное хранилище') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                            <p>Облачное хранилище для файлов. Для хранение файлов вам необходимо зарегистрироваться</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

