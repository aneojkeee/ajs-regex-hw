export default function validity(phone) {
  if (/[\s-()]/.test(phone)) {
    phone = phone.replace(/[\s-()]/g, "");
  }
  if (/^8/.test(phone)) {
    phone = phone.replace(/^8/g, "+7");
  }
  return phone;
}
