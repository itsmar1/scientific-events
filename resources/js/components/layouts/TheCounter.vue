<template>
    <section class="counter">
        <div class="counter-group text-center">
            {{  displayDays }}
            <div class="counter-name">days</div>
        </div>
        <span class="dots">:</span>
        <div class="counter-group text-center">
            {{  displayHours }}
            <div class="counter-name">hours</div>
        </div>
        <span class="dots">:</span>
        <div class="counter-group text-center">
            {{  displayMinutes }}
            <div class="counter-name">minutes</div>
        </div>
        <span class="dots">:</span>
        <div class="counter-group text-center">
            {{  displaySeconds }}
            <div class="counter-name">seconds</div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0
        }
    },
    computed: {
        // _secondes: () => 1000,
        _secondes() {
            return 1000;
        },
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
        now() {
            return new Date();
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        showRemaining() {

            const timer = setInterval(() => {
                // const now = new Date();
                // const end = new Date(2022, 6, 23, 10, 10, 10, 10);

                // const that = this;

                // const now = new Date;


                const distance = (this.end).getTime() - (this.now).getTime();
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
