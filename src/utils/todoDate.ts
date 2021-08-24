export interface IDate {
  year: string;
  month: string;
  day: string;
}

export class TodoDate {
  private krTimeDiffZone = 9 * 60 * 60 * 1000;
  private regex = /(\d{4}). (\d{1,2}). (\d{1,2})/;

  getDate(): string {
    const today = this.getKST().toLocaleString('ko-KR');
    const { year, month, day } = this.changeString(today) as IDate;

    return `${year}-${month}-${day}`;
  }

  private getKST(): Date {
    const utc = this.getUTC(new Date());
    const kst = new Date(utc + this.krTimeDiffZone);

    return kst;
  }

  private getUTC(date: Date): number {
    return date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  }

  private changeString(today: string): IDate | null {
    const result = today.match(this.regex);
    if (!result) return null;

    const year = result[1];
    let month = result[2];
    let day = result[3];

    month.length === 1 ? (month = `0${month}`) : null;
    day.length === 1 ? (day = `0${day}`) : null;

    return { year, month, day };
  }
}
