export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number;
  //privateはインスタンスからも継承先からもアクセス出来ない

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  public takeDamage(damage: number):void{
    this.hp -= damage;

    if(this.hp <0){
      this.hp = 0;
    }//残りHP以上のダメージを喰らったとき、マイナスにならないようにする（すべて０にする）
  }

  public isDead(): boolean {
  return this.hp <= 0;
  }

  abstract attack(opponent: Character):void;
}
