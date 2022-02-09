<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;

    static $rules=[
        'eventName',
        'title'=>'required',
        'description'=>'required',
        'start'=>'required',
        'end'=>'required'
    ];

    protected $fillable = [
        'eventName',
        'title',
        'description',
        'start',
        'end'
    ];
}
