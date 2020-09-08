'use strict';

const memo = new Map();
// n = 0 とn = 1は決まっているので最初から入れておく
memo.set(0,0);
memo.set(1,1);

function fib(n) {
	// メモにデータがあればそれを使う
	if (memo.has(n)) {
	return memo.get(n);
	} else {
		// なかったら計算する。
		// 結果をメモ化して利用するので処理速度が改善される
	const value = fib(n - 1) + fib(n - 2);
	memo.set(n, value);
	return value;
	}
}

const length = 40;
for ( let i = 0; i <= length; i++) {
	let a = fib(i);
	console.log( `${i} のフィボナッチ数は${a}です。`);
}