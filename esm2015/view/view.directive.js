import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class FroalaViewDirective {
    constructor(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    // update content model as it comes
    set froalaView(content) {
        this._element.innerHTML = content;
    }
    ngAfterViewInit() {
        this.renderer.addClass(this._element, "fr-view");
    }
}
FroalaViewDirective.ɵfac = function FroalaViewDirective_Factory(t) { return new (t || FroalaViewDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FroalaViewDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: FroalaViewDirective, selectors: [["", "froalaView", ""]], inputs: { froalaView: "froalaView" } });
/** @nocollapse */
FroalaViewDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
FroalaViewDirective.propDecorators = {
    froalaView: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FroalaViewDirective, [{
        type: Directive,
        args: [{
                selector: '[froalaView]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { froalaView: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3JjL3ZpZXcvdmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLG1CQUFtQjtBQUNoQyxJQUdFLFlBQW9CLFFBQW1CLEVBQUUsT0FBbUI7QUFDOUQsUUFEc0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFFLFFBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUMxQyxJQUFFLENBQUM7QUFDSCxJQUNFLG1DQUFtQztBQUNyQyxJQUFFLElBQWEsVUFBVSxDQUFDLE9BQWU7QUFDekMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQ2pCLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyRCxJQUFFLENBQUM7QUFDSDtpREFuQkMsU0FBUyxTQUFDLG1CQUNULFFBQVEsRUFBRSxjQUFjLGVBQ3pCOzRLQUNJO0FBQUU7QUFBb0I7QUFHMUIsWUFSK0IsU0FBUztBQUFLLFlBQTFCLFVBQVU7QUFBSTtBQUFJO0FBRXBDLHlCQVlDLEtBQUs7QUFBSzs7Ozs7Ozs7O0FBZEEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBbEJBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFKQSxBQUFBLEFBQUEsQUFBQSxBQWNBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Zyb2FsYVZpZXddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJvYWxhVmlld0RpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgY29udGVudCBtb2RlbCBhcyBpdCBjb21lc1xyXG4gIEBJbnB1dCgpIHNldCBmcm9hbGFWaWV3KGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50LCBcImZyLXZpZXdcIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==