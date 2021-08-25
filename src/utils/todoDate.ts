type StringDate = string;
type NumberDate = number;

export class TodoDate {
  private krTimeDiffZone = 9 * 60 * 60 * 1000;
  private regex = /(\d{4}). (\d{1,2}). (\d{1,2})/;

  getToday(): StringDate {
    const kstDate = this.getKST(new Date());
    const formatted = this.format(kstDate);

    return formatted;
  }
  // 임시 추가.
  converToString(date: Date): StringDate {
    const krString = this.getKST(date).toLocaleString('ko-KR');
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

  private format(kstDate: Date): StringDate {
    const [year, month, day, hours, minutes, seconds] = this.convertToObj(
      kstDate,
    ) as string[];

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  private convertToObj(kstDate: Date): string[] | null {
    const result = kstDate.toLocaleString('ko-KR').match(this.regex);
    if (!result) return null;

    const year = result[1];
    const month = result[2];
    const day = result[3];
    const hours = `${kstDate.getHours()}`;
    const minutes = `${kstDate.getMinutes()}`;
    const seconds = `${kstDate.getSeconds()}`;

    const dateInfo = [year, month, day, hours, minutes, seconds];
    const converted = dateInfo.map((i) => (i.length === 1 ? `0${i}` : `${i}`));

    return converted;
  }
}
