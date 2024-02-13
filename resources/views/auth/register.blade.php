@extends('layouts.master-auth')

@push('plugin-styles')
    <!-- Add any additional styles for the registration page here -->
@endpush

@section('content')
    <!-- Main Body Starts -->
    <div class="register">
        <div class="container-fluid register-container">
            <div class="p-30 h-100">
                <div class="row main-register h-100">
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 p-0">
                        <div class="register-start">
                            <h6 class="mt-2 text-primary text-center font-20">{{ __('Sign Up') }}</h6>
                            <p class="text-center text-muted mt-3 mb-3 font-14">{{ __('Create a new account') }}</p>
                            <form method="POST" action="{{ route('register') }}">
                                @csrf

                                <div class="register-inputs mt-5">
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" placeholder="Your Name" required autocomplete="name" autofocus>
                                    <i class="las la-user"></i>
                                </div>
                                @error('Team name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <div class="register-inputs mt-3">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Email" required autocomplete="email">
                                    <i class="las la-envelope"></i>
                                </div>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <div class="register-inputs mt-3">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="Password" required autocomplete="new-password">
                                    <i class="las la-lock"></i>
                                </div>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <div class="register-inputs mt-3">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password" required autocomplete="new-password">
                                    <i class="las la-lock"></i>
                                </div>

                                <div class="register-inputs mt-4">
                                    <button class="ripple-button ripple-button-primary btn-lg btn-register" type="submit">
                                        <div class="ripple-ripple js-ripple">
                                            <span class="ripple-ripple__circle"></span>
                                        </div>
                                        {{ __('REGISTER') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- You can add additional content for the registration page here -->
                </div>
            </div>
        </div>
    </div>
    <!-- Main Body Ends -->
@endsection

@push('plugin-scripts')
    <!-- Add any additional scripts for the registration page here -->
@endpush
