<nav id="sidebar">
    <ul class="navbar-item theme-brand flex-row  text-center">
        <li class="nav-item theme-logo">
            <a href="{{ url('/') }}">
                <img src="{{ url('assets/img/logo.png') }}" class="navbar-logo" alt="logo">
            </a>
        </li>
        <li class="nav-item theme-text">
            <a href="{{ url('/') }}" class="nav-link"> Neptune </a>
        </li>
    </ul>
    <ul class="list-unstyled menu-categories" id="accordionExample">
        <li class="menu">
            <a href="#dashboard" data-active="" data-toggle="collapse" aria-expanded="" class="dropdown-toggle">
                <div class="">
                    <i class="las la-home"></i>
                    <span>{{__('Dashboards')}}</span>
                </div>
                <div>
                    <i class="las la-angle-right sidemenu-right-icon"></i>
                </div>
            </a>
            <ul class="submenu list-unstyled collapse " id="dashboard" data-parent="#accordionExample">
                <li class=" ">
                    <a data-active="" href=""> {{__('Dashboard 1')}} </a>
                </li>
            </ul>
        </li>

    </ul>
</nav>
