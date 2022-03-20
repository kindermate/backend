// 개월수 계산
import * as moment from 'moment';

export default function numberOfMonth(birth: string): number {
  const d = new Date();
  const today = moment(d);
  return today.diff(birth, 'months');
}
