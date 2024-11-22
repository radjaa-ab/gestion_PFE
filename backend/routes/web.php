<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/projects', function () {
    return Inertia::render('Projects');
});

// Add routes for all your pages...