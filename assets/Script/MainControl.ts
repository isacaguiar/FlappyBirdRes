const {ccclass, property} = cc._decorator;

@ccclass
export default class MainControl extends cc.Component {

    @property(cc.Sprite)
    spBg: cc.Sprite [] = [null, null];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt: number) {
    // move the background node
    for (let i = 0; i < this.spBg.length; i++) {
            this.spBg[i].node.x -= 1.0;
        if (this.spBg[i].node.x <= -288) {
            this.spBg[i].node.x = 288;
        }
    }
}
}

