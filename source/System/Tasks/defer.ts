/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */

export default function defer(task:Function, delay?:number):ICancellableDefer
{
	// Note: NaN will always evaluate false.
	if(!(delay>=0)) delay = 0;

	var id:number = 0;

	var cancel:any = ()=>
	{
		if(id)
		{
			clearTimeout(id);
			id = 0;
			return true;
		}
		return false;
	};
	cancel.dispose = cancel.cancel = cancel;

	id = setTimeout(()=>
	{
		cancel();
		task();
	}, delay);

	return cancel;

}