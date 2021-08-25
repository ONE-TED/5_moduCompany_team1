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

  getToday(): StringDate {
    const krString = this.getKST(new Date()).toLocaleString('ko-KR');
    const formatted = this.format(krString);

    return formatted;
  }

  convertToNumber(krString: StringDate): NumberDate {
    const krDate = new Date(krString);
    return this.getKST(krDate).getTime();
  }

  private getKST(date: Date): Date {
    const utc = this.getUTC(date);
    const kst = new Date(utc + this.krTimeDiffZone);

    return kst;
  }

  private getUTC(date: Date): NumberDate {
    return date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  }

  private format(stringDate: string): StringDate {
    const { year, month, day } = this.convertToObj(stringDate) as IDate;
    return `${year}-${month}-${day}`;
  }

  private convertToObj(date: string): IDate | null {
    const result = date.match(this.regex);
    if (!result) return null;

    const year = result[1];
    let month = result[2];
    let day = result[3];

    month.length === 1 ? (month = `0${month}`) : null;
    day.length === 1 ? (day = `0${day}`) : null;

    return { year, month, day };
  }
}
