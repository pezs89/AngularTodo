import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'date-picker',
    templateUrl: 'datePicker.component.html'
})

export class DatePicker implements OnInit {
    @Input() selectedDate: Date;
    isOpened: boolean = false;
    currentDate: any = {
        currentMonth: 0,
        currentYear: 0,
        currentDays: []
    }

    months = [{
        month: 0,
        title: 'Jan'
    },
    {
        month: 1,
        title: 'Feb'
    },
    {
        month: 2,
        title: 'Mar'
    },
    {
        month: 3,
        title: 'Apr'
    },
    {
        month: 4,
        title: 'May'
    },
    {
        month: 5,
        title: 'Jun'
    },
    {
        month: 6,
        title: 'Jul'
    },
    {
        month: 7,
        title: 'Aug'
    },
    {
        month: 8,
        title: 'Sep'
    },
    {
        month: 9,
        title: 'Oct'
    },
    {
        month: 10,
        title: 'Nov'
    },
    {
        month: 11,
        title: 'Dec'
    }];

    ngOnInit() {
        if (!this.selectedDate) {
            this.selectedDate = new Date();
            this.currentDate.currentMonth = this.getCurrentMonth(this.selectedDate);
            this.currentDate.currentYear = this.getCurrentYear(this.selectedDate);
            this.currentDate.currentDays = this.getCurrentMonthDays(this.selectedDate)
        }
    }

    openCalendar() {
        this.isOpened = !this.isOpened;
    }

    getCurrentMonth(date: Date) {
        return this.months[date.getMonth()].month;
    }

    getCurrentYear(date: Date) {
        return date.getFullYear();
    }

    switchDate(type: boolean) {
        let newDate;
        if ((this.currentDate.currentMonth === 11 && type) ||
            (this.currentDate.currentMonth === 0 && !type)) {
            newDate = this.changeYear(type);
        } else {
            newDate = this.changeMonth(type);
        }

        this.currentDate = {
            currentYear: this.getCurrentYear(newDate),
            currentMonth: this.getCurrentMonth(newDate),
            currentDays: this.getCurrentMonthDays(newDate)
        }
    }

    changeYear(type: boolean): Date {
        if (type) {
            return new Date(this.currentDate.currentYear + 1, 0);
        } else {
            return new Date(this.currentDate.currentYear - 1, 11);
        }
    }

    changeMonth(type: boolean): Date {
        if (type) {
            return new Date(this.currentDate.currentYear, this.currentDate.currentMonth + 1);
        } else {
            return new Date(this.currentDate.currentYear, this.currentDate.currentMonth - 1);
        }
    }

    getCurrentMonthDays(date: Date): any {
        console.log(new Date(date.getFullYear(), date.getMonth()), new Date(date.getFullYear(), date.getMonth() + 1, 0))
    }
}