import * as z from 'zod'
import * as React from 'react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { CalendarIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { id, enUS } from 'date-fns/locale'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

interface Props extends React.ComponentProps<'form'> {
  closeModal: () => void
}

export default function RentForm({ className, closeModal }: Props) {
  const { t, i18n } = useTranslation()
  const [calendarOpen, setCalendarOpen] = React.useState(false)

  const formSchema = z.object({
    username: z.string(),
    phone: z.string(),
    dob: z.date(),
    duration: z.string(),
    deliveryOption: z.enum(['selfPick', 'delivery'])
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      username: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    closeModal()
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid items-start gap-4', className)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.name')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.phone')}</FormLabel>
              <FormControl>
                <Input type="tel" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.duration')}</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.pickDate')}</FormLabel>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP', {
                          locale: i18n.language === 'id' ? id : enUS
                        })
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    disabled={(date) =>
                      date <
                      new Date(new Date().setDate(new Date().getDate() - 1))
                    }
                    initialFocus
                    onSelect={(e) => {
                      field.onChange(e)
                      setCalendarOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryOption"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>{t('form.pickOption')}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2"
                >
                  <FormItem className="flex w-full items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="selfPick" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {t('form.selfPick')}
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex w-full items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="delivery" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {t('form.delivery')}
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </form>
    </Form>
  )
}
