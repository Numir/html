class Random {
    static adet() {
        return Math.floor(Math.random() * 4);
    }
    static generateRandomNumber(pMax, pMin) {
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }

}