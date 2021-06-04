<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

            'name' => $this->faker->company,
            'description' => $this->faker->paragraphs(7),
            'startDate' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'endDate' => $this->faker->dateTimeBetween('now', '2 years'),
            'type' => function() {
                $arr = array( "a"=>"conference", "b"=>"atelier", "c"=>"formation");

                // Use array_rand function to returns random key
                $key = array_rand($arr);

                // Display the random array element
                return $arr[$key];
            },
            'city' => $this->faker->city,
            'country' => $this->faker->country,
            'address' => $this->faker->address,
            'venueName' => $this->faker->streetName,
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->freeEmail
        ];
    }
}
