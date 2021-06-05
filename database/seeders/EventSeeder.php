<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;
use App\Models\Session;
use App\Models\Presentation;
use App\Models\Image;
use App\Models\Committee;
use App\Models\CommitteeMember;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::factory()->times(30)->create()
        ->each( function($event) {

            Session::factory()->times(rand(1, 20))->create([
                'event_id' => $event->id,
            ])
            ->each( function($session) {
                Presentation::factory()->times(rand(5, 10))->create([
                    'session_id' => $session->id,
                ]);
            });



            Committee::factory()->times(rand(1, 5))->create([
                'event_id' => $event->id,
            ])
            ->each( function($committee) {
                CommitteeMember::factory()->times(rand(1, 5))->create([
                    'committee_id' => $committee->id,
                ]);
            });



            Image::factory(1)->create([
                'event_id' => $event->id,
            ]);


        });
    }
}
