function RandomEmail(length, domain) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var suffix = domain;
    var adjustedLength = length - suffix.length;

    for (var i = 0; i < adjustedLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    result += suffix;

    return result;
}
function RandomPassword() {
    var length = Math.floor(Math.random() * (20 - 8 + 1)) + 8,
        charset =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`!@#$%^&*()_+-=[]{};:'\\|,.<>/?~",
        numeric = "0123456789",
        lowercase = "abcdefghijklmnopqrstuvwxyz",
        uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        special = "`!@#$%^&*()_+-=[]{};:'\\|,.<>/?~",
        retVal = "";
    retVal += numeric.charAt(Math.floor(Math.random() * numeric.length));
    retVal += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    retVal += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    retVal += special.charAt(Math.floor(Math.random() * special.length));
    for (var i = 0, n = charset.length; i < length - 4; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
}

export default function REP(EmialLength, Domain, PasswordLength) {
    const email = RandomEmail(EmialLength, Domain);
    const password = RandomPassword(PasswordLength);
    return { email, password };
}