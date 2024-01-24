<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class AdminSeeder extends Seeder
{
    public function run()
    {
        // Create 'admin' role if not exists
        $adminRole = Role::firstOrCreate(['name' => 'admin']);

        // Create admin user
        $adminUser = User::updateOrCreate(
            ['email' => 'ksian3409@gmail.com'],
            [
                'name' => 'Adminstrator',
                'password' => bcrypt('password'),
            ]
        );

        // Assign 'admin' role to the admin user
        $adminUser->roles()->syncWithoutDetaching($adminRole->id);
    }
}
