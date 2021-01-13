fn main() {
	let fizz = |n: u32| {
		let t = |d,s: String,x: Box<dyn Fn(String) -> String>| Box::new(move |y| if n % d == 0 {format!("{}{}",s,x("".to_string()))} else {x(y)});
		let f = |x| t(3, "Fizz".to_string(), x);
		let b = |x| t(5, "Buzz".to_string(), x);
		f(b(Box::new(|x| x)))(n.to_string())
	};
	for i in 0..101 {
		println!("{}",fizz(i))
	}
}
