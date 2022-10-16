@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="card-deck mb-4">
            <div class="card">
                <div class="card-header bg-dark text-light">{{ __('Папки') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="row">
                        <form id="create-folder-Form">
                            <div class="form-group mb-3">
                                <input type="text" class="col-sm-5" name="name" placeholder="Введите название папки"
                                    id="name">
                                @csrf
                                <button class="btn btn-dark col-sm-4" id="create-folder" type="button">Создать новую
                                    папку</button>
                            </div>
                        </form>
                    </div>
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                            <div class="top-cover center-block"></div>
                            <p class="top-name center-block text-center"><a href="#"><img
                                        src="{{ asset('storage/images/folder.png') }}" alt="" width="100"
                                        height="100"></a>
                                Oxxxymiron - Город под подошвой</p>
                        </div>
                        <div class="col-2">
                            <img src="{{ asset('storage/images/folder.png') }}" alt="" width="100"
                                height="100">
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
@endsection
