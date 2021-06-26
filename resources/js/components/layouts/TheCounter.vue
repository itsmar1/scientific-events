<template>
    <base-card>
    <section class="counter">
        <div class="counter-group text-center">
            <span class="counter-value">{{  displayDays }}</span>
            <div class="counter-name">{{ $t('events.counter.days') }}</div>
        </div>
        <span class="dots">:</span>
        <div class="counter-group text-center">
            <span class="counter-value">{{  displayHours }}</span>
            <div class="counter-name">{{ $t('events.counter.hours') }}</div>
        </div>
        <span class="dots">:</span>
        <div class="counter-group text-center">
            <span class="counter-value">{{  displayMinutes }}</span>
            <div class="counter-name">{{ $t('events.counter.minutes') }}</div>
        </div>
        <!-- <span class="dots">:</span>
        <div class="counter-group text-center">
            {{  displaySeconds }}
            <div class="counter-name">seconds</div>
        </div> -->
    </section>
    </base-card>
</template>

<script>
export default {
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            // displaySeconds: 0
        }
    },
    computed: {
        // _secondes: () => 1000,
        _secondes: () => 1000,
        _minutes() {
            return this._secondes * 60;
        },
        _hours() {
            return this._minutes *60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month,
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        },
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        showRemaining() {

            const timer = setInterval(() => {

                // const now = new Date();
                // const distance = this.end.getTime() - now.getTime();
                const distance = this.end.getTime() - new Date().getTime();

                // const distance = (this.end).getTime() - (this.now).getTime();


                // const distance = Math.round((this.end.getTime() - (new Date()).getTime()) / 100);

                if(distance < 0)
                {
                    clearInterval(timer);
                    return;
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor( (distance % this._days) / this._hours );
                const minutes = Math.floor( ( distance % this._hours ) / this._minutes);
                const seconds = Math.floor( ( distance % this._minutes ) / this._secondes );

                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;

            }, 1000);
        }
    }

}
</script>

<style>

</style>
