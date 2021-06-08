<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Image;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Event::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|string',
            'startDate' => 'string',
            'endDate' => 'string',
            'type' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string',
            'address' => 'required|string',
            'venueName' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email'
        ]);

        $event = new Event();
        $event->name = $fields['name'];
        $event->description = $fields['description'];
        $event->startDate = $fields['startDate'];
        $event->endDate = $fields['endDate'];
        $event->type = $fields['type'];
        $event->city = $fields['city'];
        $event->country = $fields['country'];
        $event->address = $fields['address'];
        $event->venueName = $fields['venueName'];
        $event->phone = $fields['phone'];
        $event->email = $fields['email'];
        $event->save();

        $eventImage = new Image();
        $eventImage->event_id = $event->id;
        $eventImage->image = $fields['image'];
        $eventImage->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        return Event::find($request->id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }

    public function search(Request $request)
    {
        // $event = Event::find($request->id);

        // $event->sessions()->where('event_id', $request->id)->get;

        // return $event;

        return Event::join('sessions', 'events.id', '=', 'sessions.event_id')
            ->join('presentations', 'sessions.id', '=', 'presentations.session_id')->get();

    }

    public function preview(Request $request)
    {
        return Event::join('images', 'events.id', '=', 'images.event_id')->get();
    }

    // public function preview(Request $request)
    // {
    //     $event = Event::join('images', 'events.id', '=', 'images.event_id')->get();
    //     return $event;
    // }

    public function getEvent(Request $request)
    {
        $events = Event::join('images', 'events.id', '=', 'images.event_id')->where('images.event_id', $request->id)->get();
        $sessions = Event::join('sessions', 'events.id', '=', 'sessions.event_id')->where('sessions.event_id', $request->id)->get();
        $committees = Event::join('committees', 'events.id', '=', 'committees.event_id')->where('committees.event_id', $request->id)->get();
        return [
            'events' => $events,
            'sessions' => $sessions,
            'committees' => $committees
        ];
    }
}
