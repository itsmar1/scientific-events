<?php

namespace App\Http\Controllers;

use App\Models\CommitteeMember;
use Illuminate\Http\Request;

class CommitteeMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CommitteeMember::all();
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
        $fields = $request->validate([
            'committee_id',
            'firstName' => 'required|string',
            'lastName' => 'required|string'
        ]);

        $member = new CommitteeMember();
        $member->committee_id = $fields['committee_id'] ?? null;
        $member->firstName = $fields['firstName'];
        $member->lastName = $fields['lastName'];
        $member->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CommitteeMember  $committeeMember
     * @return \Illuminate\Http\Response
     */
    public function show(CommitteeMember $committeeMember)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CommitteeMember  $committeeMember
     * @return \Illuminate\Http\Response
     */
    public function edit(CommitteeMember $committeeMember)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CommitteeMember  $committeeMember
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CommitteeMember $committeeMember)
    {
        //
        return CommitteeMember::update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CommitteeMember  $committeeMember
     * @return \Illuminate\Http\Response
     */
    public function destroy(CommitteeMember $committeeMember)
    {
        return CommitteeMember::destroy($committeeMember->id);
    }
}
