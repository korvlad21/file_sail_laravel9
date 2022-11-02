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
                                <button class="btn btn-dark col-sm-4" id="create-folder"
                                    data-url="{{ route('folders.store') }}" type="button">Создать новую
                                    папку</button>
                            </div>
                        </form>
                    </div>
                    <div class="row folders">
                        @foreach ($folders as $key => $folder)
                            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 folder">
                                <div class="top-cover center-block"></div>
                                <p class="top-name center-block text-center"><a href="#"><img
                                            src="{{ asset('storage/images/folder.png') }}" alt="" width="100"
                                            height="100"></a>
                                </p>
                                <p class="top-name center-block text-center text">{{ $folder->name }}</p>
                                <p class="top-name center-block text-center">
                                <form action="{{ route('folders.destroy', $folder->id) }}" method="post"
                                    class="top-name center-block text-center">
                                    @csrf
                                    @method('put')
                                    <button class="btn btn-primary edit" data-id="{{ $folder->id }}"
                                        type="button">✎</button>
                                    <button class="btn btn-danger" type="submit">X</button>
                                </form>

                                </p>

                            </div>
                        @endforeach
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 folder" id="new_folder">
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
@endsection
