"use client"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Button
} from "@/shared/components/ui/button.tsx"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/components/ui/form.tsx"
import {
    Input
} from "@/shared/components/ui/input.tsx"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/shared/components/ui/select.tsx"
import {Card, CardContent} from "@/shared/components/ui/card.tsx";

const formSchema = z.object({
    search: z.string().optional(),
    sort: z.string().optional(),
    filter: z.string().optional()
});

export default function FiltersDialog() {

    const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),

    })

    function onSubmit(values: z.infer < typeof formSchema > ) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Card className="-py-2 w-full max-w-3xl mx-auto">
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto py-10">

                        <FormField
                            control={form.control}
                            name="search"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Search</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Search"
                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-12 gap-4">

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="sort"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Sort</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select task order."/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="latestToOldest">Latest to oldest</SelectItem>
                                                    <SelectItem value="oldestToLatest">Oldest to latest</SelectItem>
                                                    <SelectItem value="highToLow">High to low pri.</SelectItem>
                                                    <SelectItem value="lowToHigh">Low to high pri.</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="filter"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Filter</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select task order."/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="completed">Completed</SelectItem>
                                                    <SelectItem value="uncompleted">Uncompleted</SelectItem>
                                                    <SelectItem value="highPriority">High priority</SelectItem>
                                                    <SelectItem value="mediumPriority">Medium priority</SelectItem>
                                                    <SelectItem value="lowPriority">Low priority</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                        <Button type="submit" className="w-full">Apply</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

    )
}