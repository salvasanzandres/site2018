
export class SupportStorage{
  private storage: any[] = [];

  getItem(key: string) {
    return this.storage[key];
  }

  setItem(key: string, value: any) {
    this.storage[key] = value;
    return true;
  }

  removeItem(key: string) {
    delete this.storage[key];
    return true;
  }
}
