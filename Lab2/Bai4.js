function spreadOut() {
    let fragment = ['to', 'code'];
    let fragment1 = ['learning'];
    let fragment2 = ['is', 'fun'];
    let sentence = fragment1.concat(fragment).concat(fragment2);
    return sentence;
}

console.log(spreadOut());