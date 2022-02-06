<?php

namespace Database\Seeders;

use Facade\Ignition\Support\FakeComposer;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach(range(1,30) as $index)
        {
        \App\Models\Customer::create([
            'first_name' => $faker->name(),
            'last_name' => $faker->name(),
            'email' => $faker->unique()->safeEmail()
        ]);
    }
    }
}
