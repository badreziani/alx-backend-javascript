export default class HolbertonClass {
  constructor(size, location, teacher) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }

    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }

    if (typeof teacher !== 'string') {
      throw TypeError('Teacher must be a string');
    }

    this._size = size;
    this._location = location;
    this._teacher = teacher;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  get teacher() {
    return this._teacher;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._location = location;
  }

  set teacher(teacher) {
    if (typeof teacher !== 'string') {
      throw TypeError('Teacher must be a string');
    }
    this._teacher = teacher;
  }

  display() {
    return `${this._size} - ${this._location} - ${this._teacher}`;
  }
}
