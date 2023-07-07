const bounceKfs = [
    { transform: 'translate3d(0, -100px, 0)' },
    { transform: 'translate3d(0, 0, 0)' },
];
const bounceOptions = {
    duration: 500,
    direction: 'alternate',
    easing: 'cubic-bezier(.5, 0.05, 1, .5)',
    iterations: Infinity,
};
const bounceKfFx = (target) => new KeyframeEffect(
    target,
    bounceKfs,
    bounceOptions
)
export const bounceAnim = (target) => new Animation(
    bounceKfFx(target)
)

const fadeAwayKfs = [{ opacity: 1 }, { opacity: 0 }];
const fadeAwayOptions = { duration: 500, easing: 'ease-out', fill: 'forwards' };
const fadeAwayKfFx = (target) => new KeyframeEffect(
    target,
    fadeAwayKfs,
    fadeAwayOptions
);
export const fadeAwayAnim = (target) => new Animation(
    fadeAwayKfFx(target)
)