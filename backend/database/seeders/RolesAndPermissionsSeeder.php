<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'view-orders']);
        Permission::create(['name' => 'manage-orders']);
        Permission::create(['name' => 'manage-inventory']);
        Permission::create(['name' => 'view-customers']);
        Permission::create(['name' => 'export-data']);
        Permission::create(['name' => 'view-analytics']);

        // create roles and assign created permissions

        // Store Manager
        $role = Role::create(['name' => 'store-manager']);
        $role->givePermissionTo('view-orders');
        $role->givePermissionTo('manage-orders');
        $role->givePermissionTo('manage-inventory');
        $role->givePermissionTo('view-customers');

        // Super Admin
        $role = Role::create(['name' => 'super-admin']);
        $role->givePermissionTo(Permission::all());
    }
}
