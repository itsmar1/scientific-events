<?php

namespace Database\Factories;

use App\Models\Session;
use Illuminate\Database\Eloquent\Factories\Factory;

class SessionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Session::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title(),
            'type' => function() {
                $arr = array( "a"=>"Orale", "b"=>"Poster");

                // Use array_rand function to returns random key
                $key = array_rand($arr);

                // Display the random array element
                return $arr[$key];
            },
            'date' => $this->faker->dateTimeBetween('now', '2 years'),
            'hour' => $this->faker->numberBetween(1, 24),
        ];
    }
}
