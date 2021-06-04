<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCommitteeIdToCommitteeMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('committee_members', function (Blueprint $table) {

            $table->unsignedBigInteger('committee_id')->after('id')->nullable();

            $table->foreign('committee_id')->references('id')->on('committees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('committee_members', function (Blueprint $table) {

            $table->dropForeign(['committee_id']);
            $table->dropColumn('committee_id');
        });
    }
}
