const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {

    //Speed of bird
    speed: number = 0;

    onLoad () {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    start () {

    }

    update (dt: number) {
        this.speed -= 0.05;
        this.node.y += this.speed;

        var angle = -(this.speed/2) * 30;
        if (angle >= 30) {
            angle = 30;
        }
        this.node.rotation = angle;
    }

    onTouchStart (event: cc.Event.EventTouch) {
        this.speed = 2;
    }
}