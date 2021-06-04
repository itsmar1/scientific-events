<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presentation extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'startHour',
        'endHour',
    ];

    public function session()
    {
        return $this->belongsTo(Session::class);
    }
}
