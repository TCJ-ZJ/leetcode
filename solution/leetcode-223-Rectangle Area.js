/*Rectangle Area
Find the total area covered by two rectilinear rectangles in a 2D plane.
Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
*/


/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var cover1 = (C-A)*(D-B),
    cover2 = (G-E)*(H-F);
    var coverX = C < E ? 0 : C < G ? A < E ? C-E : C-A : A > G ? 0 : A < E ? G-E : G-A;
    var coverY = D < F ? 0 : D < H ? B < F ? D-F : D-B : B > H ? 0 : B < F ? H-F : H-B;
    return cover1+cover2 - coverX*coverY;
};
