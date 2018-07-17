import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'date-picker',
    templateUrl: 'datePicker.component.html'
})

export class DatePicker implements OnInit {
    @Input() selectedDate: Date;
    @Input() dateFormat: string;
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
            this.selectedDate.setHours(0, 0, 0, 0);
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

    getCurrentMonthDays(date: Date): Date[] {
        const days = [];
        const calendarStartDateNumber = this.getMonthViewFirstDayOfTheWeek(date);
        const calendarEndDateNumber = this.getMonthViewLastDayOfTheWeek(date);

        for (let i = calendarStartDateNumber; i <= calendarEndDateNumber; i++) {
            days.push(new Date(date.getFullYear(), date.getMonth(), i));
        }

        return days;
    }

    getMonthViewFirstDayOfTheWeek(date: Date): number {
        const monthStartDay = new Date(date.getFullYear(), date.getMonth()).getDay();
        return this.getFirstOrLastDayOfTheMonthView(monthStartDay);
    }

    getMonthViewLastDayOfTheWeek(date: Date): number {
        const monthEndDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const monthDayNumbers = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        return monthDayNumbers + this.getFirstOrLastDayOfTheMonthView(monthEndDay.getDay(), false);
    }

    getFirstOrLastDayOfTheMonthView(dayOfTheWeek: number, isMonthStart: boolean = true) {
        switch (dayOfTheWeek) {
            case 0:
                return isMonthStart ? -5 : 0;
            case 1:
                return isMonthStart ? 1 : 6;
            case 2:
                return isMonthStart ? 0 : 5;
            case 3:
                return isMonthStart ? -1 : 4;
            case 4:
                return isMonthStart ? -2 : 3;
            case 5:
                return isMonthStart ? -3 : 2;
            case 6:
                return isMonthStart ? -4 : 1;
            default:
                break;
        }
    }

    selectDate(date: Date) {
        this.selectedDate = date;
    }

    isSelectedDate(date: Date): boolean {
        return Date.parse(this.selectedDate.toDateString()) === Date.parse(date.toDateString());
    }

    isPreviousMonth(date: Date): boolean {
        return date.getMonth() !== this.currentDate.currentMonth;
    }
}