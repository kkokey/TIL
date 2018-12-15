import { observable } from 'mobx';

class modelEx {
  id = Math.random();
  @observable name;
  @observable value;

  constructor( name, value ) {
    this.name = name;
    this.value = value;
  }

  applyNewInfo( name, value ) {
    if (this.name === name ) {
      this.value = value;
    }
  }
}

export default modelEx;
