import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Main() {
	const formSchema = z.object({
		firstName: z.string().min(2, {
			message: "First name must be at least 2 characters.",
		}),
		lastName: z.string().min(2, {
			message: "Last name must be at least 2 characters.",
		}),
		email: z.string().email({
			message: "Invalid email address.",
		}),
		phoneNumber: z.string().min(10, {
			message: "Phone number must be at least 10 characters.",
		}),
		CUPS: z.string().min(10, {
			message: "CUPS must be at least 10 characters.",
		}),
		address: z.string().min(5, {
			message: "Address must be at least 5 characters.",
		}),
		postcode: z.string().min(5, {
			message: "Postcode must be at least 5 characters.",
		}),
		city: z.string().min(2, {
			message: "City must be at least 2 characters.",
		}),
		termsOfService: z.boolean().refine((value) => value === true, {
			message: "You must accept the terms of service.",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			CUPS: "",
			address: "",
			postcode: "",
			city: "",
			termsOfService: false,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="bg-white rounded-[24px] p-[20px] sm:p-[36px] flex flex-col gap-[36px]">
			{/* PROCESS STEPS */}
			<div className="flex flex-row justify-between gap-[6px] w-full max-w-[630px] m-auto text-[12px] text-center sm:text-[16px] ">
				<div className="flex flex-col sm:flex-row gap-[10px] items-center">
					<div className="flex w-[34px] h-[34px] rounded-full bg-secondary justify-center items-center text-white">
						1
					</div>
					<p>Receive offer</p>
				</div>
				<div className="h-[2px] bg-secondary grow mt-[16px] sm:m-auto" />
				<div className="flex flex-col sm:flex-row gap-[10px] items-center">
					<div className="flex w-[34px] h-[34px] rounded-full bg-secondary justify-center items-center text-white">
						2
					</div>
					<p>Sign Contract</p>
				</div>
				<div className="h-[2px] bg-gray-200 grow  mt-[16px] sm:m-auto " />
				<div className="flex flex-col sm:flex-row gap-[10px] items-center">
					<div className="flex w-[34px] h-[34px] rounded-full bg-gray-200 justify-center items-center text-black">
						3
					</div>
					<p>Enjoy Solar</p>
				</div>
			</div>

			<div className="flex flex-col-reverse items-center lg:items-stretch lg:flex-row justify-around gap-[36px]">
				{/* Form : LEFT SIDE (DESKTOP) / BOTTOM (Mobile) */}
				<div className="w-full max-w-[475px]">
					<h1 className="text-[20px] sm:text-[30px] font-bold">Your Details</h1>
					<Form {...form}>
						<div
							onSubmit={form.handleSubmit(onSubmit)}
							className="px-[16px] sm:px-[24px] py-[2px] border-[1px] rounded-2xl divide-y-2 my-[20px]"
						>
							<div className="flex flex-col divide-y-2 md:divide-y-0 md:flex-row">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input
													placeholder="John"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Doe"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="flex flex-col divide-y-2 md:divide-y-0 md:flex-row">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="example@example.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<Input
													placeholder="1234567890"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="CUPS"
								render={({ field }) => (
									<FormItem>
										<FormLabel>CUPS</FormLabel>
										<FormControl>
											<Input
												placeholder="ES0043000006063027KW"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address</FormLabel>
										<FormControl>
											<Input
												placeholder="123 Main St"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex flex-col divide-y-2 md:divide-y-0 md:flex-row">
								<FormField
									control={form.control}
									name="postcode"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Postcode</FormLabel>
											<FormControl>
												<Input
													placeholder="12345"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="city"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>City</FormLabel>
											<FormControl>
												<Input
													placeholder="New York"
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
						</div>
						<FormField
							control={form.control}
							name="termsOfService"
							render={({ field }) => (
								<FormItem className="flex items-center">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											className="mr-[10px] "
										/>
									</FormControl>
									<FormLabel className=" leading-[22px]">
										By ticking this box, you are confirming
										that you have read, understood, and
										agreed to our
										<a className="underline text-[#2F80ED]">
											Terms of Service
										</a>
										.
									</FormLabel>
								</FormItem>
							)}
						/>
						<Button
							className="block lg:hidden bg-secondary font-semibold text-[14px] leading-[18px] rounded-2xl m-auto"
							onClick={form.handleSubmit(onSubmit)}
						>
							GENERATE CONTRACT
						</Button>
					</Form>
				</div>
        {/* Price and Illutstration : Right side (Desktop) / upper side (Mobile) */}
				<div className="w-full flex flex-col items-center justify-around max-w-[475px]">
					<div className="h-[300px]">
						<img
							src="/solar_panels.png"
							alt="solar panel"
							className="object-contain w-full h-full"
						/>
					</div>
					<p className="font-bold text-[22px]  sm:text-[30px] text-center ">
						Price to Pay: €3,600.00
					</p>
					<div>
						<Button
							className="hidden lg:block bg-secondary font-semibold text-[16px]"
							onClick={form.handleSubmit(onSubmit)}
						>
							GENERATE CONTRACT
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
