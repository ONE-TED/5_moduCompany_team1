type StringDate = string;
type NumberDate = number;

interface IDate {
  year: string;
  month: string;
  day: string;
}

export class TodoDate {
  private krTimeDiffZone = 9 * 60 * 60 * 1000;
  private regex = /(\d{4}). (\d{1,2}). (\d{1,2})/;

  getNumber(): NumberDate {
    return this.getKST().getTime();
  }

  convertToString(number: NumberDate): StringDate {
    const kst = new Date(number);

    return this.getString(kst);
  }

  private getKST(): Date {
    const utc = this.getUTC(new Date());
    const kst = new Date(utc + this.krTimeDiffZone);

    return kst;
  }

  private getUTC(date: Date): NumberDate {
    return date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  }

  private getString(kst: Date): StringDate {
    const today = kst.toLocaleString('ko-KR');
    const { year, month, day } = this.convertToObj(today) as IDate;

    return `${year}-${month}-${day}`;
  }

  private convertToObj(today: string): IDate | null {
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
