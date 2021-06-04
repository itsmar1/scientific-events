<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'description',
        'startDate',
        'endDate',
        'type',
        'city',
        'country',
        'address',
        'venueName',
        'phone',
        'email',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function sessions()
    {
        return $this->hasMany(Session::class);
    }

    public function image()
    {
        return $this->hasOne(Image::class);
    }

    public function committees()
    {
        return $this->hasMany(Committee::class);
    }
}
