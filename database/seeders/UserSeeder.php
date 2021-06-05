<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->firstName = 'Super';
        $user->lastName = 'Admin';
        $user->role = 'admin';
        $user->email = 'admin@admin.com';
        $user->password = bcrypt('admin');
        $user->save();

        User::factory()->times(100)->create()
        ->each( function($user) {
            $event_ids = range(1, 30);
            shuffle($event_ids);
            $assignements = array_slice($event_ids, 0, rand(0, 8));
            foreach($assignements as $event_id)
            {
                DB::table('user_event')->insert([
                    'user_id' => $user->id,
                    'event_id' => $event_id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        });

    }
}
